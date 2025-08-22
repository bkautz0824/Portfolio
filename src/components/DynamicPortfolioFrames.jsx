"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Portfolio frame component with decorative borders and hover effects
function PortfolioFrame({
  project,
  width = "100%",
  height = "100%",
  className = "",
  isHovered = false,
  showFrame = true,
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Project Image with scaling effect */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div
            className="w-full h-full overflow-hidden rounded-lg"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Link href={project.link} target="_blank" passHref>
              <div className="relative w-full h-full group cursor-pointer">
                {project.image.startsWith('/images/placeholder-') ? (
                  <div className={`w-full h-full flex items-center justify-center text-white font-bold text-lg ${
                    project.id === 4 ? 'bg-gradient-to-br from-teal-500 to-teal-700' : 
                    'bg-gradient-to-br from-blue-600 to-blue-800'
                  }`}>
                    {project.title}
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:brightness-110"
                  />
                )}
                
                {/* Overlay with project info */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-center mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, index) => (
                      <span key={index} className="bg-white/20 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Decorative Frame Elements */}
        {showFrame && (
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
            {/* Simple border frame effect */}
            <div className="absolute inset-0 border-2 border-white/20 rounded-lg shadow-lg"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-teal-400 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-teal-400 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-teal-400 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-teal-400 rounded-br-lg"></div>
          </div>
        )}
      </div>
    </div>
  )
}

// Dynamic grid layout with hover expansion effect
export default function DynamicPortfolioGrid({
  projects,
  hoverSize = 6,
  gapSize = 4,
  showFrames = true,
}) {
  const [hovered, setHovered] = useState(null)

  // Calculate grid dimensions based on number of projects
  const getGridDimensions = (count) => {
    if (count <= 4) return { rows: 2, cols: 2 }
    if (count <= 6) return { rows: 2, cols: 3 }
    if (count <= 9) return { rows: 3, cols: 3 }
    return { rows: 3, cols: 4 }
  }

  const { rows: gridRows, cols: gridColumns } = getGridDimensions(projects.length)

  const getRowSizes = () => {
    if (hovered === null) {
      return Array(gridRows).fill("1fr").join(" ")
    }
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / (gridRows - 1)
    return Array.from({ length: gridRows }, (_, i) => 
      i === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`
    ).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) {
      return Array(gridColumns).fill("1fr").join(" ")
    }
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / (gridColumns - 1)
    return Array.from({ length: gridColumns }, (_, i) => 
      i === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`
    ).join(" ")
  }

  const getTransformOrigin = (row, col) => {
    const vertical = row === 0 ? "top" : row === Math.floor(gridRows / 2) ? "center" : "bottom"
    const horizontal = col === 0 ? "left" : col === Math.floor(gridColumns / 2) ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  return (
    <div
      className="relative w-full h-[600px]"
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {projects.map((project, index) => {
        const row = Math.floor(index / gridColumns)
        const col = index % gridColumns
        const transformOrigin = getTransformOrigin(row, col)

        return (
          <motion.div
            key={project.id}
            className="relative"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <PortfolioFrame
              project={project}
              width="100%"
              height="100%"
              className="absolute inset-0"
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
            />
          </motion.div>
        )
      })}
    </div>
  )
}