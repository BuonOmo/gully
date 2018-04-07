<template>
  <div @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <slot/>
  </div>
</template>

<script>
  const directions = Object.freeze({ UP: 'up', DOWN: 'down', RIGHT: 'right', LEFT: 'left' })

  export default {
    props: {
      threshold: {
          type: Number,
          default: 90
        }
    },

    data() {
      return {
        direction: null,
        startX: 0,
        endX: 0,
        startY: 0,
        endY: 0
      }
    },

    methods: {
      onTouchStart(e) {
        const t = e.touches[0]
        this.startX = t.screenX
        this.startY = t.screenY
      },

      onTouchMove(e) {
        const t = e.touches[0]
        this.endX = t.screenX
        this.endY = t.screenY
      },

      onTouchEnd(e) {
        const deltaX = this.endX - this.startX
        const deltaY = this.endY - this.startY
        // Min swipe distance
        if (Math.pow(deltaX, 2) + Math.pow(deltaY, 2) < Math.pow(this.threshold, 2)) return

        if (deltaY === 0 || Math.abs(deltaX / deltaY) > 1) // horizontal
          this.direction = deltaX > 0 ? directions.RIGHT : directions.LEFT
        else // vertical
          this.direction = deltaY > 0 ? directions.UP : directions.DOWN

        if (this.direction) this.$emit(`swipe${this.direction}`, e)

        this.direction = null
        }
    }
  }
</script>