import { ViewIcon } from "@chakra-ui/icons";
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	Button,
	Center,
	CircularProgress,
	CircularProgressLabel,
	Container,
	Divider,
	HStack,
	Heading,
	Stat,
	StatArrow,
	StatGroup,
	StatHelpText,
	StatLabel,
	StatNumber,
	VStack,
} from "@chakra-ui/react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { STATUS_TOUR, statusTour } from "../tours/shepherd/statusTour";

const random100 = () => Math.floor(Math.random() * 100);
const RandomProgressCircle = ({
	onProgressUpdated,
}: {
	onProgressUpdated: (progress: number) => void;
}) => {
	const [progress, setProgress] = useState(random100());

	useEffect(() => {
		const timer = setInterval(() => {
			const number = random100();
			onProgressUpdated(number);
			setProgress(number);
		}, 3000);
		return () => clearInterval(timer);
	}, [onProgressUpdated]);

	const handleStartTour = useCallback(() => {
		statusTour.start();
	}, []);
	const color = useMemo(() => {
		if (progress < 20) {
			return "red.700";
		} else if (progress < 30) {
			return "red.300";
		} else if (progress < 50) {
			return "yellow.700";
		} else if (progress < 70) {
			return "yellow.300";
		} else {
			return "green.500";
		}
	}, [progress]);
	return (
		<VStack w="full">
			<Button
				onClick={handleStartTour}
				mt={4}
				w="full"
				color={"purple"}
				variant={"outline"}
				borderColor={"purple"}
				rightIcon={<ViewIcon />}
			>
				Explain
			</Button>
			<CircularProgress size="sm" color={color} value={progress}>
				<CircularProgressLabel fontSize={"xxx-large"} color="black">
					{progress}%
				</CircularProgressLabel>
			</CircularProgress>
		</VStack>
	);
};
const RandomProgress = () => {
	const [progressHistory, setProgressHistory] = useState<number[]>([]);

	const handleProgressUpdated = useCallback((p: number) => {
		setProgressHistory((s) => s.concat(p));
	}, []);
	const progress = useMemo(
		() => progressHistory[progressHistory.length - 1],
		[progressHistory]
	);
	const progressOver50Percent = useMemo(() => {
		return (
			Math.round(
				(progressHistory.reduce((p, c) => p + c, 0) /
					progressHistory.length) *
					100
			) / 100
		);
	}, [progressHistory]);
	const progressUnder50Percent = useMemo(
		() => Math.round((100 - progressOver50Percent) * 100) / 100,
		[progressOver50Percent]
	);
	return (
		<HStack w="full" h="full">
			<Container
				id={STATUS_TOUR.PROGRESS}
				flexGrow={0}
				h="full"
				borderRadius={20}
				bg="white"
			>
				<Center verticalAlign={"middle"}>
					<RandomProgressCircle
						onProgressUpdated={handleProgressUpdated}
					/>
				</Center>
			</Container>
			<Container
				id={STATUS_TOUR.ALERTS_PANEL}
				flexGrow={1}
				borderRadius={20}
				p={4}
				bg="blackAlpha.700"
				h="full"
				w={"full"}
			>
				<Heading m={4}>Alerts & Logs</Heading>
				<Divider />

				<StatGroup>
					<Stat>
						<HStack>
							<Box id={STATUS_TOUR.RECORDS}>
								<StatLabel>Records</StatLabel>
								<StatNumber>
									{progressHistory.length}
								</StatNumber>
							</Box>
						</HStack>
						<HStack>
							<StatHelpText id={STATUS_TOUR.INCREASE}>
								<StatArrow type="increase" />
								{progressOver50Percent}%
							</StatHelpText>
							<StatHelpText id={STATUS_TOUR.DECREASE}>
								<StatArrow type="decrease" />
								{progressUnder50Percent}%
							</StatHelpText>
						</HStack>
					</Stat>
				</StatGroup>
				<Divider />
				<Box id={STATUS_TOUR.ALERTS}>
					<Alert
						mt={4}
						status="success"
						visibility={progress >= 50 ? "visible" : "hidden"}
					>
						<AlertIcon />
						<AlertTitle>Progress is Great!</AlertTitle>
						<AlertDescription>
							No need to take action
						</AlertDescription>
					</Alert>
					<Alert
						mt={4}
						status="error"
						visibility={progress < 50 ? "visible" : "hidden"}
					>
						<AlertIcon />
						<AlertTitle>Progress is Low!</AlertTitle>
						<AlertDescription>
							You may need to review the application logs to
							determine what is going wrong!
						</AlertDescription>
					</Alert>
				</Box>
			</Container>
		</HStack>
	);
};
export default RandomProgress;
