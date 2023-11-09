-- CreateTable
CREATE TABLE "Wallet" (
    "id" INTEGER NOT NULL DEFAULT 0,
    "btc" TEXT NOT NULL DEFAULT 'btc',
    "eth" TEXT NOT NULL DEFAULT 'eth',
    "ltc" TEXT NOT NULL DEFAULT 'ltc',
    "usdt" TEXT NOT NULL DEFAULT 'usdt',
    "leverage" INTEGER NOT NULL DEFAULT 2
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_id_key" ON "Wallet"("id");
