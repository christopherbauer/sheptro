import {
	Card,
	CardHeader,
	Heading,
	CardBody,
	Stack,
	StackDivider,
	Box,
	Text,
} from "@chakra-ui/react";
import { WELCOME_TOUR } from "../tours/shepherd/welcomeTour";

const ClientReport = () => {
	return (
		<Card id={WELCOME_TOUR.CLIENT_REPORT}>
			<CardHeader>
				<Heading size="md">Client Report</Heading>
			</CardHeader>

			<CardBody>
				<Stack divider={<StackDivider />} spacing="4">
					<Box id={WELCOME_TOUR.CLIENT_SUMMARY}>
						<Heading size="xs" textTransform="uppercase">
							Summary
						</Heading>
						<Text pt="2" fontSize="sm">
							View a summary of all your clients over the last
							month.
						</Text>
					</Box>
					<Box id={WELCOME_TOUR.CLIENT_OVERVIEW}>
						<Heading size="xs" textTransform="uppercase">
							Overview
						</Heading>
						<Text pt="2" fontSize="sm">
							Check out the overview of your clients.
						</Text>
					</Box>
					<Box id={WELCOME_TOUR.CLIENT_ANALYSIS}>
						<Heading size="xs" textTransform="uppercase">
							Analysis
						</Heading>
						<Text pt="2" fontSize="sm">
							See a detailed analysis of all your business
							clients.
						</Text>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default ClientReport;
