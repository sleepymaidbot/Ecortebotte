module.exports = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  if (message.author.id !== "324281236728053760") return undefined;
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};