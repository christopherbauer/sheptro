import { Box, Kbd, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useGlobalTourStore } from "../tours";
import { WELCOME_TOUR } from "../tours/shepherd/welcomeTour";

const ClientList = () => {
	const [clients, setClients] = useState<string[]>([]);
	const setClientList = useGlobalTourStore((s) => s.setClientList);

	useEffect(() => {
		const keyboardEventCallback: (
			this: Document,
			ev: KeyboardEvent
		) => any = (event) => {
			if (event.shiftKey && event.key === "+") {
				setClients((cs) => {
					const clientList = cs.concat(`${cs.length + 1}`);
					setClientList(clientList);
					return clientList;
				});
			}
		};
		document.addEventListener("keydown", keyboardEventCallback);
		return function () {
			document.removeEventListener("keydown", keyboardEventCallback);
		};
	}, [setClientList]);
	const items = useMemo(
		() =>
			clients.map((c, i) => (
				<ListItem id={`client-${c}`} key={`client-li-${i}`}>
					Client #{c}
				</ListItem>
			)),
		[clients]
	);
	return (
		<VStack id={WELCOME_TOUR.CLIENT_LIST}>
			<Box>
				Add Clients: <Kbd>shift</Kbd> + <Kbd>+</Kbd>
			</Box>
			<Box>
				<UnorderedList>{items}</UnorderedList>
			</Box>
		</VStack>
	);
};

export default ClientList;
