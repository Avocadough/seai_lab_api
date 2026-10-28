interface Detection {
  class: string
  conf: number | null
}

export interface PredictionResult {
  detections: Detection[]
  imagedetect: string
}
