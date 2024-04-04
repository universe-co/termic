import styler from "../core/styler";

export const format = (data: any, _: any = null, for_object: boolean | any = false, depth = 1): string => {
	const tab_symbol = " ";
	const tab = tab_symbol.repeat(2).repeat(depth);

	if (data === null) return styler.color.white.bold("null");
	if (typeof data === "string") {
		if (for_object) return styler.color.hex("#0DBC5A")(`'${data}'`);
		return data;
	}
	if (typeof data === "number") return styler.color.yellow(data.toString());
	if (typeof data === "boolean") return styler.color.yellow(data.toString());
	if (typeof data === "undefined") return styler.color.grey("undefined");
	if (typeof data === "symbol") return styler.color.hex("#0DBC5A")(data.toString());
	if (typeof data === "function" && data.toString().startsWith("class")) return styler.color.hex("#11A8AB")(`[class ${data.name}]`);
	if (typeof data === "function") return styler.color.hex("#11A8AB")(`[Function: ${data.name}]`);
	if (typeof data === "object" && Array.isArray(data)) {
		const result = [];
		const open = "[ ";
		const close = " ]";
		for (const key in data) {
			result.push(`${format(data[key], null, true, depth + 1)}`);
		}
		if (result.length === 0) return `${open.trim()}${close.trim()}`;
		if (result.join(", ").length > process.stdout.columns - 4 || result.join(", ").length >= 120) {
			return `${open.trim()}\n${tab}${result.join(",\n" + tab)}\n${depth > 1 ? tab_symbol.repeat(2).repeat(depth - 1) : ""}${close.trim()}`;
		}
		return `${open.trim()} ${result.join(", ")} ${close.trim()}`;
	}
	if (typeof data === "object") {
		const result = [];
		const open = "{ ";
		const close = " }";
		for (const key of Object.keys(data)) {
			result.push(`${key}: ${format(data[key], null, true, depth + 1)}`);
		}
		if (result.length === 0) return `${open.trim()}${close.trim()}`;
		if (result.join(", ").length > process.stdout.columns - 4 || result.join(", ").length >= 120) {
			return `${open.trim()}\n${tab}${result.join(",\n" + tab)}\n${depth > 1 ? tab_symbol.repeat(2).repeat(depth - 1) : ""}${close.trim()}`;
		}
		return `${open.trim()} ${result.join(", ")} ${close.trim()}`;
	}
};
