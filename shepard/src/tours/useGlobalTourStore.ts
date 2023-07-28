import { create } from "zustand";

interface GlobalTourState {
	openPanel: string | undefined;
	setOpenPanel: (id: string) => void;
	clientList: string[];
	setClientList: (items: string[]) => void;
}
const useGlobalTourStore = create<GlobalTourState>((set) => ({
	openPanel: undefined,
	setOpenPanel: (id) => set({ openPanel: id }),
	clientList: [],
	setClientList: (items) => set({ clientList: items }),
}));
export default useGlobalTourStore;
