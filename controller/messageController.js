const Message = require('../model/message')

// to insert data in message model
exports.postmessage = async (req, res) => {
    let message = new Message({
        email: req.body.email,
        message: req.body.message
    })
    message = await message.save()

    if (!message) {
        return res.status(400).json({ error: "Something went wrong." })
    }
    res.send(message)


}



// to show all message list
exports.showMessages = async (req, res) => {
    const message = await Message.find()
    if (!message) {
        return res.status(400).json({ error: "Something went wrong." })
    }
    res.send(message)
}



// to show single message
exports.messageDetails = async (req, res) => {
    const message = await Message.findById(req.params.id)
    if (!message) {
        return res.status(400).json({ error: "message not found." })
    }
    res.send(message)
}



// to delete a message
exports.deletemessage = (req, res) => {
    Message.findByIdAndRemove(req.params.id)
        .then(message => {
            if (!message) {
                return res.status(400).json({ error: "message not found." })
            }
            else {
                return res.status(200).json({ message: "message deleted" })
            }
        })
        .catch(err => {
            return res.status(400).json({ error: err })
        })
}