import {
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
} from "@chakra-ui/react";

const RangeSliderExample = () => {
	return (
		<>
			Range Slider
			<RangeSlider defaultValue={[10, 30]} w="full">
				<RangeSliderTrack>
					<RangeSliderFilledTrack />
				</RangeSliderTrack>
				<RangeSliderThumb index={0} />
				<RangeSliderThumb index={1} />
			</RangeSlider>
		</>
	);
};
export default RangeSliderExample;
