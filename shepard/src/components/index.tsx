import { GridItem } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { StartTours } from "./StartTours";

const GI = ({ id, children }: PropsWithChildren<{ id?: string }>) => {
	return (
		<GridItem id={id} p={4} w="100%" h="full" bg="blue.500">
			{children}
		</GridItem>
	);
};

export { GI, StartTours };
