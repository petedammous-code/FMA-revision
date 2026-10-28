---
id: ch02-logarithme-determination-principale-def
type: definition
chapter: 2
title: Détermination principale du logarithme complexe
ref: non numéroté, section II.9, p. 56 (et Exercice II.9.4)
page: 56
importance: 3
depends: [ch02-logarithme-existence, ch02-etoile-simplement-connexe, ch02-logarithme-def]
tags: [logarithme, determination principale, coupure, argument, plan coupe]
---
## Intuition

> 💡 On voudrait un « $\log z$ » holomorphe : une fonction $L$ avec $e^{L(z)}=z$, donc $L(z)=\log|z|+i\cdot(\text{un argument de }z)$. Le problème est l'argument : en faisant un tour autour de $0$, il augmente de $2\pi$ et ne revient pas à sa valeur de départ. Sur $\C^\times$ c'est impossible. Solution : on **coupe** le plan le long de la demi-droite $\R_-=]-\infty,0]$, que l'on s'interdit de traverser ; sur le **plan coupé** $\C\setminus\R_-$, on prend l'argument dans $]-\pi,\pi[$, qui varie continûment. On obtient la **détermination principale** $\mathrm{Log}$, qui prolonge le logarithme réel $\log$ de $]0,+\infty[$.

Pourquoi ça marche : $\C\setminus\R_-$ est étoilé en $1$ donc simplement connexe ([[ch02-etoile-simplement-connexe]]), et sur un tel ouvert toute fonction holomorphe sans zéro a un logarithme ([[ch02-logarithme-existence]]) ; on choisit celui qui vaut $0$ en $1$. Rappel : un **logarithme** de $h$ est une $L$ holomorphe telle que $L'=h'/h$ et $e^{L}=h$ ([[ch02-logarithme-def]]).

## Énoncé

**Définition (poly, section II.9, p. 56).** On définit $z\mapsto\mathrm{Log}(z)$ sur l'ouvert $\Omega=\C\setminus\R_-$, obtenu en pratiquant la **coupure** $\R_-$, comme étant la primitive de $z\mapsto1/z$ s'annulant en $z=1$ ; cette fonction coïncide avec le logarithme usuel sur $\R_+^\times$ (noté $\log$). On dit que c'est la **détermination principale** du logarithme complexe.

**Propriétés (poly, Exercice II.9.4, p. 56).**
* (i) $\exp(\mathrm{Log}(z))=z$ pour tout $z\in\C\setminus\R_-$ ; $\mathrm{Log}(\exp z)=z$ pour tout $z$ tel que $-\pi<\Im(z)<\pi$.
* (ii) $\mathrm{Log}(z)=\log(r)+i\,\mathrm{Arg}(z)$ pour tout $z=re^{i\theta}\in\C\setminus\R_-$ ($r>0$), l'argument $\mathrm{Arg}(z)=\theta$ étant ici dans $]-\pi,\pi[$.
* (iii) $\mathrm{Log}(z_1)+\mathrm{Log}(z_2)=\mathrm{Log}(z_1z_2)\bmod 2i\pi$, quels que soient $z_1,z_2\in\C\setminus\R_-$ tels que $z_1z_2\in\C\setminus\R_-$.

**Bonne définition.** $\Omega=\C\setminus\R_-$ est étoilé en $1$ : un point $(1-t)+tz$ ($t\in[0,1]$) du segment $[1,z]$ a pour partie imaginaire $t\,\Im(z)$ ; il n'est réel que si $t=0$ (c'est $1$) ou si $z\in\R$, auquel cas $z>0$ et le segment est dans $]0,+\infty[$. Donc $\Omega$ est simplement connexe (Proposition II.1.5), $1/z\in\Hol(\Omega)$ y a une primitive (Théorème II.9.1, [[ch02-primitive-simplement-connexe]]), unique à constante près car $\Omega$ est connexe ; on impose $\mathrm{Log}(1)=0$. Sur $]0,+\infty[$, $x\mapsto\mathrm{Log}(x)$ a pour dérivée $\mathrm{Log}'(x)=1/x$ et vaut $0$ en $1$ : c'est $\log$.

**Démonstration des propriétés.**
* (i), première partie : $(z\,e^{-\mathrm{Log}(z)})'=e^{-\mathrm{Log}(z)}-z\cdot\frac1z\,e^{-\mathrm{Log}(z)}=0$ sur le connexe $\Omega$, et cette fonction vaut $1$ en $z=1$. Donc $e^{\mathrm{Log}(z)}=z$ : $\mathrm{Log}$ est bien un logarithme de $z$ au sens de [[ch02-logarithme-def]].
* (ii) : de $e^{\mathrm{Log}(z)}=z=re^{i\theta}$ on tire $e^{\Re\mathrm{Log}(z)}=r$, donc $\Re\,\mathrm{Log}(z)=\log r$, et $\Im\,\mathrm{Log}(z)\equiv\theta\pmod{2\pi}$. La fonction $\mathrm{Arg}$ est continue sur $\Omega$ : pour $z=x+iy\in\Omega$, $|z|+x>0$ et $\mathrm{Arg}(z)=2\arctan\dfrac{y}{|z|+x}$ (formule de l'angle moitié $\tan\frac\theta2=\frac{\sin\theta}{1+\cos\theta}$, valable pour $\theta\in]-\pi,\pi[$). Ainsi $\frac{1}{2\pi}\big(\Im\,\mathrm{Log}(z)-\mathrm{Arg}(z)\big)$ est continue sur le connexe $\Omega$, à valeurs entières, nulle en $z=1$ : elle est identiquement nulle.
* (i), seconde partie : si $z=x+iy$ avec $-\pi<y<\pi$, alors $w=e^{z}=e^{x}e^{iy}$ a pour module $e^{x}$ et pour argument $y\in]-\pi,\pi[$, donc $w\notin\R_-$, et (ii) donne $\mathrm{Log}(w)=\log(e^{x})+iy=z$.
* (iii) : $e^{\mathrm{Log}(z_1)+\mathrm{Log}(z_2)}=z_1z_2=e^{\mathrm{Log}(z_1z_2)}$, donc la différence est dans $\ker\exp=2i\pi\Z$. Plus précisément, par (ii), elle vaut $i\big(\mathrm{Arg}\,z_1+\mathrm{Arg}\,z_2-\mathrm{Arg}(z_1z_2)\big)$, qui est dans $2i\pi\Z\cap i\,]-3\pi,3\pi[=\{-2i\pi,0,2i\pi\}$.

## Hypothèses

### H1 — la coupure $\R_-$ (on travaille sur $\C\setminus\R_-$ et pas sur $\C^\times$)

**Rôle.** Elle rend l'ouvert simplement connexe, ce qui garantit l'existence de la primitive de $1/z$.

**Si on la retire.** Aucun logarithme holomorphe (ni même continu) de $z$ n'existe sur $\C^\times$ : sinon $1/z$ aurait une primitive sur $\C^\times$ et $\int_{C(0,1)}\frac{dz}{z}$ serait nulle, alors qu'elle vaut $2i\pi$ ([[ch02-indice-cercle]]). Concrètement, $\mathrm{Log}$ ne se prolonge pas continûment à $\R_-^\times$ : pour $x<0$,
$$
\lim_{y\to0^+}\mathrm{Log}(x+iy)=\log|x|+i\pi,\qquad \lim_{y\to0^-}\mathrm{Log}(x+iy)=\log|x|-i\pi,
$$
un saut de $2i\pi$ à travers la coupure. Le choix de **$\R_-$** est une convention (toute demi-droite issue de $0$ conviendrait) ; c'est celle qui laisse $]0,+\infty[$ dans le domaine.

### H2 — la normalisation $\mathrm{Log}(1)=0$

**Rôle.** Elle choisit, parmi les logarithmes $\mathrm{Log}+2ik\pi$ ($k\in\Z$) de $z$ sur $\C\setminus\R_-$, celui qui prolonge le logarithme réel.

**Si on la retire.** $\mathrm{Log}+2i\pi$ est encore un logarithme de $z$ sur $\C\setminus\R_-$, d'argument dans $]\pi,3\pi[$, mais ne prolonge plus $\log$.

## Exemples

* **Valeurs.** $\mathrm{Log}(i)=\log1+i\frac\pi2=\frac{i\pi}{2}$ ; $\mathrm{Log}(-i)=-\frac{i\pi}{2}$ ; $\mathrm{Log}(1+i)=\frac12\log2+\frac{i\pi}{4}$ (car $|1+i|=\sqrt2$, $\mathrm{Arg}(1+i)=\frac\pi4$) ; $\mathrm{Log}(-1+i)=\frac12\log2+\frac{3i\pi}{4}$. En revanche $\mathrm{Log}(-1)$ **n'est pas défini** ($-1$ est sur la coupure).
* **Développement en série.** Pour $|w|<1$, $\mathrm{Log}(1+w)=\sum_{n\ge1}\frac{(-1)^{n+1}}{n}w^n$. En effet $D(1,1)\subset\{\Re z>0\}\subset\C\setminus\R_-$, et sur le connexe $D(1,1)$ les deux fonctions $z\mapsto\mathrm{Log}(z)$ et $z\mapsto\sum_{n\ge1}\frac{(-1)^{n+1}}{n}(z-1)^n$ ont la même dérivée $\frac{1}{1+(z-1)}=\frac1z$ et valent $0$ en $1$.
* **Les identités « mod $2i\pi$ » sont vraiment modulo $2i\pi$.** Pour $z_1=z_2=e^{2i\pi/3}$ : $\mathrm{Log}(z_1)+\mathrm{Log}(z_2)=\frac{4i\pi}{3}$, alors que $z_1z_2=e^{4i\pi/3}=e^{-2i\pi/3}$ donne $\mathrm{Log}(z_1z_2)=-\frac{2i\pi}{3}$ : la différence est $2i\pi$. Et $\mathrm{Log}(e^{2i\pi})=\mathrm{Log}(1)=0\neq2i\pi$ (ici $\Im(2i\pi)=2\pi\notin]-\pi,\pi[$).

## Pièges

* > ⚠️ $\mathrm{Log}(z_1z_2)\neq\mathrm{Log}(z_1)+\mathrm{Log}(z_2)$ en général ; l'égalité est vraie si $\mathrm{Arg}\,z_1+\mathrm{Arg}\,z_2\in]-\pi,\pi[$ (par exemple si $z_1$ ou $z_2$ est réel $>0$).
* > ⚠️ $\mathrm{Log}(e^{z})=z$ seulement si $|\Im(z)|<\pi$ ; en général $\mathrm{Log}(e^{z})=z-2ik\pi$ avec $k$ tel que $\Im(z)-2k\pi\in]-\pi,\pi[$ (si $\Im(z)\notin\pi+2\pi\Z$).
* $\mathrm{Log}$ n'est **pas** défini sur $\R_-$, et aucun prolongement continu n'existe à travers la coupure : un contour d'intégration qui traverse $\R_-$ ne peut pas utiliser $\mathrm{Log}$ (d'où la détermination de coupure $\R_+$ dans [[ch02-exemple-trou-de-serrure]], pour laquelle $\mathrm{Log}(-1)=i\pi$).
* Ne pas confondre $\log$ (logarithme réel sur $]0,+\infty[$) et $\mathrm{Log}$ (détermination principale complexe), ni $\mathrm{Log}$ avec « un logarithme » $\mathrm{Log}(h)$ d'une fonction $h$ ([[ch02-logarithme-def]]).
* Symétrie utile : $\mathrm{Log}(\bar z)=\overline{\mathrm{Log}(z)}$ sur $\C\setminus\R_-$ (par (ii), $\mathrm{Arg}\,\bar z=-\mathrm{Arg}\,z$).
