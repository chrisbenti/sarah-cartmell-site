#!/bin/bash
rm favicon.ico
convert -density 256x256 -background transparent favicon.svg -define icon:auto-resize -colors 256 favicon.ico