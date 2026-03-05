const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")
const noJobMessage = document.getElementById("emptyJob")



let currentFilter = "all-filter-btn"

function updateCounts() {
    const jobs = document.querySelectorAll(".job-card")

    let total = jobs.length
    let interviews = 0
    let rejected = 0

    jobs.forEach(job => {
        const status = job.dataset.status

        if (status === "interview") interviews++
        if (status === "rejected") rejected++
    })

    totalCount.textContent = total
    interviewCount.textContent = interviews
    rejectedCount.textContent = rejected
   
}

function updateStatus(job, newStatus) {
    const statusElement = job.querySelector(".status")

    job.dataset.status = newStatus

    if (newStatus === "interview") {
        statusElement.textContent = "Interview"
        statusElement.className =
            "status mt-2 px-3 py-1 inline-block bg-green-200 rounded"
    }

    if (newStatus === "rejected") {
        statusElement.textContent = "Rejected"
        statusElement.className =
            "status mt-2 px-3 py-1 inline-block bg-red-200 rounded"
    }

    updateCounts()
    applyCurrentFilter()
}

const jobContainer = document.getElementById("jobContainer")

jobContainer.addEventListener("click", function (e) {
    const job = e.target.closest(".job-card")
    if (!job) return

    if (e.target.classList.contains("interview-btn")) {
        updateStatus(job, "interview")
    }

    if (e.target.classList.contains("reject-btn")) {
        updateStatus(job, "rejected")
    }

    if (e.target.classList.contains("delete-btn")) {
        job.remove()
        updateCounts()
        applyCurrentFilter()
    }
})

const filterButtons = document.querySelectorAll(".filter-btn")

filterButtons.forEach(button => {
    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {
            btn.classList.remove("bg-black", "text-white")
            btn.classList.add("bg-gray-300")
        })

        this.classList.remove("bg-gray-300")
        this.classList.add("bg-black", "text-white")

        currentFilter = this.id
        applyCurrentFilter()
    })
})

function applyCurrentFilter() {
    const jobs = document.querySelectorAll(".job-card")

    let showCount = 0

    const totalJob = jobs.length

    jobs.forEach(job => {

        let isShowing = false

        if (currentFilter === "all-filter-btn") {
            isShowing = true
        }

        if (currentFilter === "interview-filter-btn") {
            isShowing = job.dataset.status === "interview"
        }

        if (currentFilter === "rejected-filter-btn") {
            isShowing = job.dataset.status === "rejected"
        }

        job.style.display = isShowing ? "flex" : "none"

        if (isShowing) showCount++
    })

    if (showCount === 0) {
        noJobMessage.classList.remove("hidden")
    } else {
        noJobMessage.classList.add("hidden")
    }

    document.getElementById("job-count").textContent = `${showCount} of ${totalJob} jobs`
}

updateCounts()
applyCurrentFilter()