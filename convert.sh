#!/bin/bash
rm favicon.ico
rm qr*png
convert -density 256x256 -background transparent favicon.svg -define icon:auto-resize -colors 256 favicon.ico
convert -density 2048x2048 -background transparent qr.svg qr-transparent.png
convert -density 2048x2048 -background '#ffffff' -alpha remove qr.svg qr-white.png