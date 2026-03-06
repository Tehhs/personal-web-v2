package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/hello", func(c *gin.Context) {
		c.String(200, "Hello, World!")
	})
	r.Run()
}

// @BasePath /api/v1

// PingExample godoc
// @Summary ping example 2
// @Schemes
// @Description do ping
// @Tags example
// @Accept json
// @Produce json
// @Success 200 {string} Helloworld
// @Router /example/helloworld [get]
func SubmitMessage(c *gin.Context) { 

	c.String(200, "Message Submitted")

}