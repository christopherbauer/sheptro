import Shepherd from "shepherd.js";
import { welcomeTour } from "./welcomeTour";

const tours: Record<string, Shepherd.Tour> = {
	welcomeTour,
};
export { tours };
