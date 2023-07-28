import "./App.css";
import { Box, Grid, VStack } from "@chakra-ui/react";
import { GI, StartTours } from "./components";
import { WELCOME_TOUR } from "./tours/shepherd/welcomeTour";
import { PanelSet } from "./components/PanelSet";
import ClientReport from "./components/ClientReport";
import ClientList from "./components/ClientList";
import Profile from "./components/Profile";
import RandomProgress from "./components/RandomProgress";

function App() {
	return (
		<VStack>
			<Box>Shepard/IntroJS Example App</Box>
			<Grid w="full" minH={5} templateColumns={"repeat(3, 1fr)"} gap={6}>
				<GI id={WELCOME_TOUR.START}>
					<StartTours />
				</GI>
				<GI>
					<PanelSet />
				</GI>
				<GI>
					<Profile />
				</GI>
			</Grid>
			<Box w="full" h={"lg"} bg="blue.500" m={3} p={4}>
				<RandomProgress />
			</Box>
			<Grid w="full" minH={5} templateColumns={"repeat(2, 1fr)"} gap={6}>
				<GI>
					<ClientReport />
				</GI>
				<GI>
					<ClientList />
				</GI>
			</Grid>
		</VStack>
	);
}
export default App;
