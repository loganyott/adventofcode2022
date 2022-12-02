defmodule Advent2022Test do
  use ExUnit.Case
  doctest Advent2022

  test "partOne" do
    assert 68467 == Advent2022.partOne()
  end

  test "partTwo" do
    assert 203_420 == Advent2022.partTwo()
  end
end
