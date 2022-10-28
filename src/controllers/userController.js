
const express = require("express");
const userService = require("../service/userService");

class userController {
    async create(req, res) {
        const data = await userService.create(req.body);
    }
    async getAll(req, res) {
        await userService.getAll(req, res);
    }

    async getOne(req, res)
    {
        await userService.getOne(req, res);
    }

    async update(req, res) {
        await userService.update(req, res);
    }

    async delete(req, res) {
        await userService.delete(req, res);
    }
}

module.exports = new userController();