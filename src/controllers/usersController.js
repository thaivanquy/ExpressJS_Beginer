const { User } = require('../models/usersModel')

const userController = {
	addUser: async (req, res) => {
		try {
			const newUser = new User(req.body)
			const savedUser = await newUser.save()
			res.status(200).json(savedUser)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	userList: async (req, res) => {
		try {
			const users = await User.find()
			res.status(200).json(users)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	userID: async (req, res) => {
		try {
			const user = await User.findById(req.params.id)
			res.status(200).json(user)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	deleteUserID: async (req, res) => {
		try {
			await User.findByIdAndDelete(req.params.id)
			res.status(200).json('DELETE SUCCESS')
		} catch (error) {
			res.status(500).json(error)
		}
	},
	updateUserID: async (req, res) => {
		try {
			await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			})
			res.status(200).json('UPDATE SUCCESS')
		} catch (error) {
			res.status(500).json(error)
		}
	},
}

module.exports = userController
