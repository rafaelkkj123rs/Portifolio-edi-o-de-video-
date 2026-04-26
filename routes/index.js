"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    res.render('index', { title: 'Stock | Video Editor & Motion Design' });
});
router.get('/portfolio', function (req, res) {
    res.render('portfolio', { title: 'Portfolio | Stock' });
});
router.get('/hire', function (req, res) {
    res.render('hire', { title: 'Hire Me | Stock' });
});
router.post('/hire', function (req, res) {
    // Simulate form submission
    res.render('hire', { title: 'Hire Me | Stock', success: true });
});
router.get('/login', function (req, res) {
    res.render('login', { title: 'Login | Stock' });
});
router.post('/login', function (req, res) {
    // Simulate login
    res.redirect('/profile');
});
router.get('/register', function (req, res) {
    res.render('register', { title: 'Register | Stock' });
});
router.post('/register', function (req, res) {
    // Simulate register
    res.redirect('/profile');
});
router.get('/profile', function (req, res) {
    res.render('profile', { title: 'Profile | Stock' });
});
router.get('/admin', function (req, res) {
    res.render('admin', { title: 'Admin Panel | Stock' });
});
exports.default = router;
