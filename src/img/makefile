
PHOTOS_ORIGINAL=$(wildcard photos/original/*.jpg)
PHOTOS_LARGE=$(PHOTOS_ORIGINAL:photos/original/%=photos/1200/%)
PHOTOS_MINI=$(PHOTOS_ORIGINAL:photos/original/%=photos/400/%)

POSTER_ORIGINAL=$(wildcard posters/original/*.jpg)
POSTER_LARGE=$(POSTER_ORIGINAL:posters/original/%=posters/900/%)
POSTER_MINI=$(POSTER_ORIGINAL:posters/original/%=posters/180/%)

.PHONY: all
all: posters photos

.PHONY: photos
photos: $(PHOTOS_LARGE) $(PHOTOS_MINI)

.PHONY: posters
posters: $(POSTER_LARGE) $(POSTER_MINI)


posters/180/%.jpg: posters/original/%.jpg
	convert $< -resize 180x -quality 70 $@

posters/900/%.jpg: posters/original/%.jpg
	convert $< -resize 900x -quality 70 $@

photos/400/%.jpg: photos/original/%.jpg
	convert $< -resize 400x -quality 70 $@

photos/1200/%.jpg: photos/original/%.jpg
	convert $< -resize 1200x -quality 70 $@
