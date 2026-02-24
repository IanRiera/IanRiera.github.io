FROM continuumio/miniconda3:latest

WORKDIR /app

# Create the Conda environment with Node.js and npm.
COPY environment.yml ./
RUN conda env create -f environment.yml && conda clean -afy

ENV PATH=/opt/conda/envs/portfolio/bin:$PATH

# Install app dependencies first to maximize Docker layer caching.
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the app.
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0", "-p", "3000"]
