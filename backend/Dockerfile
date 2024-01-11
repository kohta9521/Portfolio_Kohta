# syntax=docker/dockerfile:1.5
FROM --platform=$BUILDPLATFORM messense/rust-musl-cross:${TARGETARCH}-musl as builder

ARG NAME=my-app
ARG TARGETARCH

RUN if [ $TARGETARCH = "amd64" ]; then \
        echo "x86_64" > /arch; \
    elif [ $TARGETARCH = "arm64" ]; then \
        echo "aarch64" > /arch; \
    else \
        echo "Unsupported platform: $TARGETARCH"; \
        exit 1; \
    fi

COPY Cargo.toml .
COPY Cargo.lock .
RUN mkdir -p src \
    && echo 'fn main() {}' > src/main.rs \
    && cargo build --release --target $(cat /arch)-unknown-linux-musl

COPY src src
RUN CARGO_BUILD_INCREMENTAL=true cargo build --release --target $(cat /arch)-unknown-linux-musl \
    && cp target/$(cat /arch)-unknown-linux-musl/release/${NAME} target/release/app


FROM --platform=$TARGETPLATFORM alpine

COPY --from=builder /home/rust/src/target/release/app /app
CMD [ "/app" ]