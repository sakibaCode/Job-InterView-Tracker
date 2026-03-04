const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")

function Counts() {

    const jobs = document.querySelectorAll(".job-card")
    totalCount.textContent = jobs.length
}
Counts()

