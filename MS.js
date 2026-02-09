function runProcess(course) {
    if (!course) {
        console.error("No course received");
        return;
    }

    // 🔗 MAP COURSES TO MICROSOFT FORM LINKS
    const msForms = {
        "MSW": "https://forms.office.com/Pages/ResponsePage.aspx?id=pT9MJPUur0SCtlIsp4LA9Pfzbic-KZlMnhwXNZ2xyl9UODJMSUNSQVVBRVJEVTBISE04VFFZWkVWMy4u",

        // 🔽 ADD MORE ROUTES BELOW
        // "BCA": "https://forms.office.com/r/YOUR_BCA_FORM_ID",
        // "MCA": "https://forms.office.com/r/YOUR_MCA_FORM_ID",
        // "B.Com": "https://forms.office.com/r/YOUR_BCOM_FORM_ID"
    };

    // 🚀 OPEN MICROSOFT FORM
    if (msForms[course]) {
        window.open(msForms[course], "_blank");
    } else {
        alert("No Microsoft Form configured for: " + course);
        console.log("Course received, but no form mapped:", course);
    }
}
