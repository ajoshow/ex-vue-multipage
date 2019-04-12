package com.ajoshow.vuebackend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("")
public class PageController {

    @GetMapping(value =  {"", "/", "/index"})
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView("/index");
        mav.addObject("greeting", "Hello World");
        return mav;
    }

    @GetMapping(value =  {"page1"})
    public ModelAndView page1() {
        ModelAndView mav = new ModelAndView("/page1");
        mav.addObject("greeting", "Hello World");
        return mav;
    }

    @GetMapping(value =  {"page2"})
    public ModelAndView page2() {
        ModelAndView mav = new ModelAndView("/page2");
        mav.addObject("greeting", "Hello World2");
        return mav;
    }
}
