---
id: ch05-petit-o-def
type: definition
chapter: 5
title: Notation $o(x)$ dans un espace vectoriel normé
ref: "non numéroté (section V.3.1)"
page: 98
importance: 2
depends: []
tags: [petit-o, negligeable, evn, notation]
---
## Intuition

> 💡 $f(x)=o(x)$ veut dire : « $f(x)$ est **infiniment petit devant** la taille $\|x\|$ de $x$ quand $x\to0$ ». Si on divise $f(x)$ par $\|x\|$, le résultat tend vers $0$.

C'est la notation de Landau de la variable réelle ($x^2=o(x)$ en $0$), transposée dans un **espace vectoriel normé** (evn) $(E,\|\cdot\|_E)$ : la seule chose qui compte de $x$ est sa norme. Elle sert à écrire la définition de la différentielle : $f(a+h)-f(a)-df_a(h)=o(h)$ signifie que l'erreur de l'approximation linéaire est négligeable devant $\|h\|$ ([[ch05-differentielle-def]]).

Notation : $B_E(0,\delta)=\{x\in E,\ \|x\|_E<\delta\}$ est la boule ouverte de centre $0$ et de rayon $\delta$.

## Énoncé

**Définition (poly, section V.3.1, p. 98).** Soit $f:U\to\R$ une fonction définie sur un ouvert $U$ d'un espace vectoriel normé $E$ contenant $0$. On écrit $f(x)=o(x)$ si pour tout $\eps>0$, il existe $\delta>0$ tel que pour tout $x\in B_E(0,\delta)\cap U$,
$$
|f(x)|<\eps\,\|x\|_E .
$$

**Lecture correcte de l'inégalité.** Prise au pied de la lettre en $x=0$, l'inégalité stricte $|f(0)|<0$ est impossible ; il faut la lire pour $x\ne0$ et demander $f(0)=0$, ou, ce qui revient au même, remplacer $<$ par $\le$ (ce qui force $f(0)=0$). Ainsi :
$$
f(x)=o(x)\iff f(0)=0\ \text{ et }\ \lim_{x\to0,\ x\ne0}\frac{|f(x)|}{\|x\|_E}=0 .
$$

**Extensions (usage du poly).**
* Si $r:U\to F$ est à valeurs dans un evn $F$, on écrit $r(h)=o(h)$ lorsque $\|r(h)\|_F=o(h)$ au sens ci-dessus.
* Pour $p\ge1$, $r(h)=o(\|h\|_E^p)$ signifie : pour tout $\eps>0$ il existe $\delta>0$ tel que $\|r(h)\|_F\le\eps\|h\|_E^p$ pour $h\in B_E(0,\delta)\cap U$.

## Hypothèses

### H1 — $U$ ouvert contenant $0$

**Rôle.** La notion parle du comportement de $f$ **près de $0$** : il faut que $f$ soit définie sur toute une boule $B_E(0,\delta_0)\subset U$, pour que « $x\to0$ » ait un sens dans toutes les directions.

### H2 — La norme de $E$ (et celle de $F$)

**Rôle.** La définition dépend a priori des normes. Mais si $\|\cdot\|'_E$ est équivalente à $\|\cdot\|_E$ ($a\|x\|_E\le\|x\|'_E\le b\|x\|_E$), alors $f(x)=o(x)$ pour l'une si et seulement si pour l'autre : si $|f(x)|<\eps\|x\|_E$ pour $\|x\|_E<\delta$, alors $|f(x)|<\frac{\eps}{a}\|x\|'_E$ pour $\|x\|'_E<a\delta$ (car $\|x\|'_E<a\delta\Rightarrow\|x\|_E<\delta$ et $\|x\|_E\le\frac1a\|x\|'_E$) ; l'autre sens est symétrique avec $b$. En dimension finie toutes les normes sont équivalentes : la notion ne dépend pas de la norme. Voir [[ch05-differentielle-normes-equivalentes]].

## Exemples

* **Le carré de la norme.** $f(x)=\|x\|_E^2$ est $o(x)$ : pour $\eps>0$, prendre $\delta=\eps$ ; si $0<\|x\|<\delta$, $|f(x)|=\|x\|\cdot\|x\|<\eps\|x\|$.
* **Applications bilinéaires.** Si $B:E\times E\to F$ est bilinéaire continue, $\|B(h,h)\|_F\le\|B\|\,\|h\|_E^2$ : donc $B(h,h)=o(h)$ (et même $O(\|h\|^2)$). C'est ce qui rend les termes quadratiques négligeables dans les différentielles (Exemple V.3.6, [[ch05-differentielle-bilineaire]]).
* **Contre-exemples dans $\R^2$** (norme euclidienne $\|(x,y)\|=\sqrt{x^2+y^2}$).
  * $f(x,y)=\sqrt{x^2+y^2}$ n'est **pas** $o(x)$ : $|f|/\|\cdot\|=1$.
  * $f(x,y)=\dfrac{x^2y}{x^2+y^2}$, $f(0,0)=0$ : pas $o$, car sur la diagonale $f(t,t)=\frac t2$ et $\|(t,t)\|=\sqrt2|t|$, rapport $\frac1{2\sqrt2}\not\to0$.
  * $f(x,y)=\dfrac{x^2y^2}{x^2+y^2}$, $f(0,0)=0$ : c'est $o$, car $x^2\le x^2+y^2$ donne $|f(x,y)|\le y^2\le\|(x,y)\|^2$.

## Pièges

* > ⚠️ $o(x)$ concerne $x\to0$ (pas $x\to\infty$) et compare à $\|x\|_E$ : on ne divise jamais par le vecteur $x$ lui-même (il n'y a pas de division dans un evn), seulement par sa norme.
* « $o(h)$ » désigne une fonction, pas un nombre : $o(h)+o(h)=o(h)$, $\lambda\,o(h)=o(h)$, mais $o(h)-o(h)$ n'est pas $0$.
* Si $f(x)=o(x)$ alors $f(0)=0$ (voir la lecture de l'inégalité stricte ci-dessus).
* Pour $p\ge1$, $r(h)=o(\|h\|^p)$ entraîne $r(h)=o(h)$ (car $\|h\|^p\le\|h\|$ si $\|h\|\le1$), la réciproque étant fausse pour $p>1$ ; c'est la forme du reste dans Taylor-Young ([[ch05-taylor-young]]).
