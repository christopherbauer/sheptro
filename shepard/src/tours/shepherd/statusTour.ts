import Shepherd from "shepherd.js";

const STATUS_TOUR = {
	ALERTS_PANEL: "alert-panel",
	ALERTS: "alerts",
	RECORDS: "records",
	INCREASE: "increase",
	DECREASE: "decrease",
	PROGRESS: "progress",
};

const statusTour: Shepherd.Tour = new Shepherd.Tour({
	useModalOverlay: false,
	defaultStepOptions: {
		classes: "",
		scrollTo: true,
	},
});

statusTour.addSteps([
	new Shepherd.Step(statusTour, {
		id: "1",
		text: "This is the average current progress of activities on the service. Low numbers are bad!",
		attachTo: {
			element: `#${STATUS_TOUR.PROGRESS}`,
			on: "right-end",
		},
		buttons: [{ text: "Next", action: statusTour.next }],
	}),
	new Shepherd.Step(statusTour, {
		id: "2",
		text: "This is the alerts panel, it will show statistics about the current situation",
		attachTo: {
			element: `#${STATUS_TOUR.ALERTS_PANEL}`,
			on: "left-start",
		},
		buttons: [{ text: "Next", action: statusTour.next }],
	}),
	new Shepherd.Step(statusTour, {
		id: "3",
		text: "This is the number of recorded progress insights collected this session",
		attachTo: {
			element: `#${STATUS_TOUR.RECORDS}`,
			on: "left-start",
		},
		buttons: [{ text: "Next", action: statusTour.next }],
	}),
	new Shepherd.Step(statusTour, {
		id: "4",
		text: "Percentage of progress events above 50%",
		attachTo: {
			element: `#${STATUS_TOUR.INCREASE}`,
			on: "left-start",
		},
		buttons: [{ text: "Next", action: statusTour.next }],
	}),
	new Shepherd.Step(statusTour, {
		id: "5",
		text: "Percentage of progress events below 50%",
		attachTo: {
			element: `#${STATUS_TOUR.DECREASE}`,
			on: "left-start",
		},
		buttons: [{ text: "Next", action: statusTour.next }],
	}),

	new Shepherd.Step(statusTour, {
		id: "5",
		text: "Smart alerts from the system",
		attachTo: {
			element: `#${STATUS_TOUR.ALERTS}`,
			on: "left-start",
		},
		buttons: [{ text: "Next", action: statusTour.next }],
	}),
]);

export { statusTour, STATUS_TOUR };
