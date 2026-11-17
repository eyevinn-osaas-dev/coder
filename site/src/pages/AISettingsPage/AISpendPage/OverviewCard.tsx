import { cn } from "cn";

/** The bordered panel that frames each section of the overview tab. */
export const OverviewCard: React.FC<React.ComponentProps<"section">> = ({
	className,
	...props
}) => {
	return (
		<section
			className={cn(
				"flex flex-col gap-3 rounded-lg border border-solid border-border p-6",
				className,
			)}
			{...props}
		/>
	);
};
