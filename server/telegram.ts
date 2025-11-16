import TelegramBot from "node-telegram-bot-api";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = "5644397480";

interface OrderData {
  name: string;
  phone: string;
  telegram?: string;
  comment?: string;
}

export async function sendOrderNotification(orderData: OrderData): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN is not set");
  }

  const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

  let message = `🔔 <b>Новая заявка на сайт!</b>\n\n`;
  message += `👤 <b>Имя:</b> ${orderData.name}\n`;
  message += `📱 <b>Телефон:</b> ${orderData.phone}\n`;
  
  if (orderData.telegram) {
    message += `💬 <b>Telegram:</b> ${orderData.telegram}\n`;
  }
  
  if (orderData.comment) {
    message += `\n📝 <b>Комментарий:</b>\n${orderData.comment}`;
  }

  await bot.sendMessage(TELEGRAM_CHAT_ID, message, { parse_mode: "HTML" });
}
