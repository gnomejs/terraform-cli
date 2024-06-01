import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("terraform", {
    name: "terraform",
    windows: [
        "${TerraformlateyInstall}\\bin\\terraform.exe",
    ],

    linux: [
        "/usr/local/bin/terraform",
    ],
});

/**
 * Represents a terraform command.
 */
export class TerraformCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("terraform", args, options);
    }
}

/**
 * Creates a new instance of the TerraformCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the TerraformCommand class.
 */
export function terraform(args?: CommandArgs, options?: CommandOptions): TerraformCommand {
    return new TerraformCommand(args, options);
}
