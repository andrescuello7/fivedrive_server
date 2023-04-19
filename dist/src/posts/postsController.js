"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePosts = exports.putPosts = exports.postPosts = exports.getPosts = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma_1.default.post.findMany();
            res.status(200).send({ posts: response });
        }
        catch (error) {
            res.status(400).send({ error: "error GET" });
        }
    });
}
exports.getPosts = getPosts;
function postPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma_1.default.post.create({
                data: req.body,
            });
            res.status(200).send({ posts: response });
        }
        catch (error) {
            res.status(400).send({ error: "error POST" });
        }
    });
}
exports.postPosts = postPosts;
function putPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const response = yield prisma_1.default.post.update({
                where: { id },
                data: req.body,
            });
            res.status(200).send({ posts: response });
        }
        catch (error) {
            res.status(400).send({ error: "error PUT" });
        }
    });
}
exports.putPosts = putPosts;
function deletePosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const response = yield prisma_1.default.post.delete({
                where: { id },
            });
            res.status(200).send({ posts: response });
        }
        catch (error) {
            res.status(400).send({ error: "error DELETE" });
        }
    });
}
exports.deletePosts = deletePosts;
//# sourceMappingURL=postsController.js.map