FROM golang:1.22-alpine AS builder
RUN go install github.com/swaggo/swag/cmd/swag@latest

FROM alpine:latest
COPY --from=builder /go/bin/swag /usr/local/bin/swag
ENTRYPOINT ["swag"]
