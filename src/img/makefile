

POSTER_ORIGINAL=$(wildcard posters/original/*.jpg)
POSTER_LARGE=$(POSTER_ORIGINAL:posters/original/%=posters/900/%)
POSTER_MINI=$(POSTER_ORIGINAL:posters/original/%=posters/180/%)

all: $(POSTER_LARGE) $(POSTER_MINI)

posters/180/%.jpg: posters/original/%.jpg
	convert $< -resize 180x -quality 70 $@

posters/900/%.jpg: posters/original/%.jpg
	convert $< -resize 900x -quality 70 $@
