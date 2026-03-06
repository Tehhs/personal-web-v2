package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello, World!")
	})
	r.Run()
}


func SubmitMessage(c *gin.Context) { 

	c.String(200, "Message Submitted")

}