import { FC, HTMLAttributes, ComponentType, Children, cloneElement, ReactElement, useState } from "react";
import styled, { useTheme, CSSObject }  from "styled-components";
import { Grid, Cell, CellProps } from "../Grid/Grid";
import { getDefaultThemeIfNotFound } from '../../theme/theme';

// Main Container
const MultiTabContainer = styled.div(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		width: "100vw",
		height: "100vh",
		backgroundColor: theme.background,
		position: "relative",
		display: "flex",
		flexDirection: "column-reverse"
	};
});

// MultiTab
type MultiTabProps = CellProps & {
	tabContent: ComponentType | JSX.Element | Element;
};
const MultiTabGroup = styled(Grid)(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		minHeight: "36px",
		height: "3.5rem",
		width: "100%",
		fontSize: "1rem",
		margin: "0",
		padding: "0",
		backgroundColor: "inherit",
		color: theme.text
	};
});
export const MultiTab = styled(Cell)<MultiTabProps>(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		userSelect: "none",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		backgroundColor: theme.sidebar,
		"&.active": {
			backgroundColor: "transparent",
			"*:has(+&)": {
				borderTopRightRadius: "10px"
			},
			"& + *": {
				borderTopLeftRadius: "10px"
			},
		},
		"&:hover": {
			cursor: "pointer"
		}
	} as CSSObject;
});

// Main Content
const MultiTabContent = styled.div(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		flex: 1
	};
});


export const MultiTabLayout: FC<HTMLAttributes<HTMLDivElement>> = ({children, ...rest}) => {
	const childrenArr = Children.toArray(children);
	const [tab, setTab] = useState< number>(0);

	return (<MultiTabContainer {...rest} >
		<MultiTabGroup justifyContent={"stretch"}>
			{
				Children.map(childrenArr, (child: ReactElement<MultiTabProps>, i: number) => {
					return (<>
						{
							cloneElement(child, {
								className: i === tab ? "active" : "",
								onClick: () => {
									setTab(i);
								}
							})
						}
					</>);
				})
			}
		</MultiTabGroup>
		<MultiTabContent>
			{
				Children.map(childrenArr, (child: ReactElement<MultiTabProps>, i: number) => {
					return (<>
						{
							i === tab && child.props.tabContent
						}
					</>);
				})
			}
		</MultiTabContent>
	</MultiTabContainer>);
};