import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";
import { WELCOME_TOUR } from "../tours/shepherd/welcomeTour";
import { useGlobalTourStore } from "../tours";

export const PanelSet = () => {
	const setOpenPanel = useGlobalTourStore((s) => s.setOpenPanel);
	return (
		<Accordion id={WELCOME_TOUR.PANELS}>
			<AccordionItem id="panel-1">
				<h2>
					<AccordionButton
						onClick={(event) =>
							setOpenPanel(event.currentTarget.id)
						}
					>
						<Box as="span" flex={1}>
							Open Panel 1
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>

				<AccordionPanel pb={4}>This is part of a check</AccordionPanel>
			</AccordionItem>
			<AccordionItem id="panel-2">
				<h2>
					<AccordionButton
						onClick={(event) =>
							setOpenPanel(event.currentTarget.id)
						}
					>
						<Box as="span" flex={1}>
							Open Panel 2
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>

				<AccordionPanel pb={4}>
					This is a secondary option
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem id="panel-3">
				<h2>
					<AccordionButton
						onClick={(event) =>
							setOpenPanel(event.currentTarget.id)
						}
					>
						<Box as="span" flex={1}>
							Open Panel 3
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>

				<AccordionPanel pb={4}>
					This is a tertiary option
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};
