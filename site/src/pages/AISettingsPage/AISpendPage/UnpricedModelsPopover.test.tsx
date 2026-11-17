import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { MockUnpricedAIModels } from "#/testHelpers/entities";
import { renderComponent } from "#/testHelpers/renderHelpers";
import { UnpricedModelsPopover } from "./UnpricedModelsPopover";

it("links to the model pricing docs and returns focus when closed", async () => {
	const user = userEvent.setup();
	renderComponent(
		<UnpricedModelsPopover models={MockUnpricedAIModels.models} />,
	);
	const trigger = screen.getByRole("button", { name: "2 Models not set up" });

	await user.click(trigger);
	expect(
		await screen.findByRole("link", { name: /View docs/ }),
	).toHaveAttribute(
		"href",
		expect.stringContaining(
			"/ai-governance/ai-gateway/cost-controls#configure-model-prices",
		),
	);

	await user.keyboard("{Escape}");
	expect(trigger).toHaveFocus();
});
