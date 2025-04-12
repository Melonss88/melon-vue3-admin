<template>
    <canvas ref="canvasRef" width="100" height="36" class="captcha-canvas" @click="generate" />
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, defineEmits } from 'vue'
  
  const emit = defineEmits(['update:code'])
  
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  let currentCode = ''
  
  const generate = () => {
    const canvas = canvasRef.value!
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  
    // 背景
    ctx.fillStyle = '#f0f0f0'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  
    currentCode = ''
    for (let i = 0; i < 4; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length))
      currentCode += char
      const fontSize = 20 + Math.random() * 8
      ctx.font = `${fontSize}px Arial`
      ctx.fillStyle = `rgb(${Math.random()*100}, ${Math.random()*100}, ${Math.random()*100})`
      ctx.save()
      ctx.translate(20 * i + 10, 25)
      const angle = Math.random() * 0.4 - 0.2
      ctx.rotate(angle)
      ctx.fillText(char, 0, 0)
      ctx.restore()
    }
  
    // 干扰线
    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.strokeStyle = '#ccc'
      ctx.stroke()
    }
  
    emit('update:code', currentCode)
  }
  
  onMounted(() => {
    generate()
  })
  </script>
  
  <style scoped>
  .captcha-canvas {
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  