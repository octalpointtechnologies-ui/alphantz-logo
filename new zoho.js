function runProcess(course) {
    if (!course) {
        console.error("No course received");
        return;
    }

    // COURSE → ACTION MAP
    const courseActions = {
        "MSW": "https://forms.zohopublic.in/alphantztechnologiesout1/form/PerformanceEvaluationForm/formperma/-KnROuVYWj4ZZ1k0D3dn4plHqsDSAsfZgPUDtuJizA4"
    };

    if (courseActions[course]) {
        window.open(courseActions[course], "_blank");
    } else {
        console.log("Course received from main page:", course);
    }
}
