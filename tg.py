import telebot
bot = telebot.TeleBot('7485089557:AAEpDTccvdc16n2l3atDsRTavIfO5jHEbPU')
@bot.message_handler(commands=['id'])
def getId(message):
    bot.send_message(message.chat.id, message.chat.id)

bot.polling(none_stop=True)