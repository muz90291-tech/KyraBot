const { EmbedBuilder } = require("discord.js");

client.on("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.get("WELCOME_CHANNEL_ID");
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor("#5865F2")
    .setTitle("🌸 Welcome to the Server!")
    .setDescription(
      `Welcome ${member}!\n\n` +
      `✨ Enjoy your stay in **${member.guild.name}**.\n` +
      `👥 You are member **#${member.guild.memberCount}**.\n\n` +
      `📖 Please read the rules and have fun!`
    )
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setImage("https://i.imgur.com/6RL6K5L.png") // চাইলে নিজের banner URL দাও
    .setFooter({
      text: `Kyra • Made by m3oza`
    })
    .setTimestamp();

  channel.send({
    content: `🎉 Welcome ${member}!`,
    embeds: [embed],
  });
});
