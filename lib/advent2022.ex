defmodule Advent2022 do
  @moduledoc """
  Documentation for `Advent2022`.
  """

  def loadCalorieTotals do
    File.read!(Path.join(:code.priv_dir(:advent2022), "input.txt"))
    |> String.split("\n\n")
    |> Enum.map(fn x ->
      String.split(x, "\n", trim: true)
      |> Enum.map(fn x -> String.to_integer(x) end)
      |> Enum.sum()
    end)
  end

  def partOne do
    loadCalorieTotals()
    |> Enum.max()
  end

  def partTwo do
    loadCalorieTotals()
    |> Enum.sort(:desc)
    |> Enum.slice(0..2)
    |> Enum.sum()
  end
end
