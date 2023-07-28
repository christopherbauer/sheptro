import Shepherd from "shepherd.js";
import useGlobalTourStore from "../useGlobalTourStore";

const WELCOME_TOUR = {
	START: "start-tours",
	PANELS: "panel-view",
	CLIENT_REPORT: "client-report",
	CLIENT_SUMMARY: "client-summary",
	CLIENT_OVERVIEW: "client-overview",
	CLIENT_ANALYSIS: "client-analysis",
	CLIENT_LIST: "client-list",
};
const outsideContext = "bananas";
const welcomeTour: Shepherd.Tour = new Shepherd.Tour({
	useModalOverlay: true,
	defaultStepOptions: {
		classes: "",
		scrollTo: true,
	},
});
welcomeTour.addSteps([
	new Shepherd.Step(welcomeTour, {
		id: "1",
		text() {
			return `Step can get values from self (${this.id}) or ${outsideContext}`;
		},
		attachTo: {
			element: `#${WELCOME_TOUR.START}`,
			on: "bottom",
		},
		buttons: [
			{
				text: "Next",
				action() {
					const openPanel = useGlobalTourStore.getState().openPanel;
					if (openPanel) {
						this.removeStep("specific-panel");
						this.addStep(
							{
								id: "specific-panel",
								text: "This panel is open specifically so you got an extra step!",
								attachTo: {
									element: `#${openPanel}`,
									on: "bottom",
								},
								buttons: [{ text: "Next", action: this.next }],
							},
							1
						);
					}
					return this.next();
				},
			},
		],
	}),
	new Shepherd.Step(welcomeTour, {
		id: "2",
		text() {
			return "Check out this panel";
		},
		attachTo: {
			element: `#${WELCOME_TOUR.PANELS}`,
			on: "bottom",
		},
		buttons: [{ text: "Next", action: welcomeTour.next }],
	}),
	new Shepherd.Step(welcomeTour, {
		id: "3",
		text: "This client report outlines everything you need to know about your clients!",
		attachTo: {
			element: `#${WELCOME_TOUR.CLIENT_REPORT}`,
			on: "top",
		},
		buttons: [
			{
				text: "Skip",
				action() {
					welcomeTour.show("7");
				},
			},
			{ text: "Next", action: welcomeTour.next },
		],
	}),
	new Shepherd.Step(welcomeTour, {
		id: "4",
		text: "This summary helps you understand your client's activity this month",
		attachTo: {
			element: `#${WELCOME_TOUR.CLIENT_SUMMARY}`,
			on: "top",
		},
		buttons: [{ text: "Next", action: welcomeTour.next }],
	}),
	new Shepherd.Step(welcomeTour, {
		id: "5",
		text: "This overview shortly explains the client's business",
		attachTo: {
			element: `#${WELCOME_TOUR.CLIENT_OVERVIEW}`,
			on: "top",
		},
		buttons: [{ text: "Next", action: welcomeTour.next }],
	}),
	new Shepherd.Step(welcomeTour, {
		id: "6",
		text: "A detailed analysis of your clients",
		attachTo: {
			element: `#${WELCOME_TOUR.CLIENT_ANALYSIS}`,
			on: "top",
		},
		buttons: [{ text: "Next", action: welcomeTour.next }],
	}),
	new Shepherd.Step(welcomeTour, {
		id: "7",
		text: "This is your client list, very important to check regularly!",
		attachTo: {
			element: `#${WELCOME_TOUR.CLIENT_LIST}`,
			on: "top",
		},
		buttons: [{ text: "Next", action: welcomeTour.next }],
	}),
	new Shepherd.Step(welcomeTour, {
		id: "8",
		text: "This is the client closest to the middle, rounded down",
		attachTo: {
			element() {
				const clientList = useGlobalTourStore.getState().clientList;
				if (clientList.length > 0) {
					return `#client-${Math.floor(clientList.length / 2)}`;
				} else {
					return `#${WELCOME_TOUR.CLIENT_LIST}`;
				}
			},
			on: "right",
		},
		buttons: [{ text: "Finish", action: welcomeTour.next }],
	}),
]);

export { welcomeTour, WELCOME_TOUR };
