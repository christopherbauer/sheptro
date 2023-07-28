import { ViewIcon } from "@chakra-ui/icons";
import { Button, Container } from "@chakra-ui/react";
import { useCallback } from "react";
import { welcomeTour } from "../tours/shepherd/welcomeTour";

export const StartTours = () => {
	const handleStartShepard = useCallback(() => {
		welcomeTour.start();
	}, []);
	return (
		<Container borderRadius={25} p={10} bg="white">
			<Button
				onClick={handleStartShepard}
				w={"full"}
				variant={"outline"}
				borderColor={"purple"}
				color={"purple"}
				rightIcon={<ViewIcon />}
			>
				Begin Product Tour with ShepardJS
			</Button>
			<Button
				mt={2}
				w="full"
				variant={"outline"}
				borderColor={"purple"}
				color={"purple"}
				rightIcon={<ViewIcon />}
			>
				Begin Product Tour with IntroJS
			</Button>
		</Container>
	);
};
