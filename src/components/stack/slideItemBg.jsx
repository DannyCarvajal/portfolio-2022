import "./slideItemBg.scss";

const SlideItemBg = ({item}) => {
	return (
		<div className={"slideItemBg " + (item === "blank" ? "hide" : "")}>
			<img src={`img/${item}bg.svg`} alt={item} height={item === "daniel" ? "33px" : "45px"} />
		</div>
	);
};

export default SlideItemBg;
