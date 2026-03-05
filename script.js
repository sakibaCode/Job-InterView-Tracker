const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")

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

    job.dataset.status = newStatus;

    if (newStatus === "interview") {
        statusElement.textContent = "Interview"
        statusElement.className = "status mt-2 px-3 py-1 inline-block bg-green-200 rounded"
    }

    if (newStatus === "rejected") {
        statusElement.textContent = "Rejected";
        statusElement.className = "status mt-2 px-3 py-1 inline-block bg-red-200 rounded"
    }

    updateCounts()
}

const jobContainer = document.getElementById("jobContainer")
jobContainer.addEventListener("click", function (e) {
    const job = e.target.closest(".job-card")

    if (!job) return;

    if (e.target.classList.contains("interview-btn")) {
        updateStatus(job, "interview")
    }

    if (e.target.classList.contains("reject-btn")) {
        updateStatus(job, "rejected")
    }

    if (e.target.classList.contains("delete-btn")) {
        job.remove()
        updateCounts()
    }
})


const filterButtons = document.querySelectorAll(".filter-btn")
filterButtons.forEach(button => {
    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {
            btn.classList.remove("bg-black", "text-white")
            btn.classList.add("bg-gray-300")
        });

        this.classList.remove("bg-gray-300")
        this.classList.add("bg-black", "text-white")

        const filterId = this.id
        const jobs = document.querySelectorAll(".job-card")

        jobs.forEach(job => {
            if (filterId === "all-filter-btn") {
                job.style.display = "flex"
            }

            if (filterId === "interview-filter-btn") {
                job.style.display =
                    job.dataset.status === "interview" ? "flex" : "none"
            }

            if (filterId === "rejected-filter-btn") {
                job.style.display =
                    job.dataset.status === "rejected" ? "flex" : "none"
            }
        })
    })
})
updateCounts()