---
id: ch03-convergence-normale-definition
type: definition
chapter: 3
title: "Rappel : convergence normale et uniforme d'une série de fonctions"
ref: non numéroté, section III.1, p. 61
page: 61
importance: 1
depends: [ch03-convergence-localement-uniforme, ch03-cauchy-locale-equivaut-convergence]
tags: [convergence-normale, convergence-uniforme, series-de-fonctions, definition]
---
## Intuition

> 💡 Une série de fonctions $\sum f_n$ converge **normalement** quand on peut la dominer terme à terme par une série **numérique** convergente : $|f_n(z)|\le\norm{f_n}_{\infty,U}$ et $\sum_n\norm{f_n}_{\infty,U}<+\infty$. C'est le critère le plus simple à vérifier en pratique (il suffit de majorer chaque terme), et il entraîne la convergence uniforme.

Notation du poly : $\norm{h}_{\infty,U}=\sup_{z\in U}|h(z)|$ (éventuellement $+\infty$). La convergence **uniforme** d'une suite de fonctions et sa version **locale** sont définies dans [[ch03-convergence-localement-uniforme]] ; pour une série, on les applique à la suite des sommes partielles $\sum_{j=0}^nf_j$.

## Énoncé

**Définition (poly, section III.1, p. 61, non numérotée).** Une série de fonctions $\sum_{n\ge0}f_n$ **converge normalement** sur un ouvert $U$ si la série $\sum_{n\ge0}\norm{f_n}_{\infty,U}$ converge (i.e. elle converge normalement pour la norme de la convergence uniforme $\norm{h}_{\infty,U}=\sup_{z\in U}|h(z)|$), et l'on dit que la série de fonctions $\sum_{n\ge0}f_n$ **converge uniformément** si la suite $\big(\sum_{j=0}^nf_j\big)_{n\ge0}$ converge uniformément. La convergence normale d'une série de fonctions entraîne la convergence uniforme de cette série.

**Version locale (utilisée dans le théorème III.1.5).** Pour des $f_n$ définies sur un ouvert $\Omega$, la série $\sum f_n$ **converge localement normalement** (resp. **localement uniformément**) sur $\Omega$ si tout point $x\in\Omega$ possède un voisinage $U_x$ sur lequel elle converge normalement (resp. uniformément). Par le même argument de compacité que [[ch03-convergence-uniforme-compacts]], cela équivaut à : $\sum_n\norm{f_n}_{\infty,K}<+\infty$ pour tout compact $K\subset\Omega$ (resp. convergence uniforme des sommes partielles sur tout compact).

**Pourquoi normale $\Rightarrow$ uniforme.** Notons $S_n=\sum_{j=0}^nf_j$. Pour $q>p$ et $z\in U$,
$$
|S_q(z)-S_p(z)|=\Big|\sum_{j=p+1}^qf_j(z)\Big|\le\sum_{j=p+1}^q\norm{f_j}_{\infty,U}\le\sum_{j>p}\norm{f_j}_{\infty,U},
$$
reste d'une série numérique convergente, qui tend vers $0$ quand $p\to+\infty$, indépendamment de $z$. La suite $(S_n)$ est donc uniformément de Cauchy sur $U$, donc converge uniformément sur $U$ (complétude de $\C$, comme dans [[ch03-cauchy-locale-equivaut-convergence]]). De plus $\sum_n f_n(z)$ converge absolument pour chaque $z$.

## Hypothèses

### H1 — les $f_n$ sont bornées sur $U$

La condition $\sum\norm{f_n}_{\infty,U}<+\infty$ impose implicitement $\norm{f_n}_{\infty,U}<+\infty$, donc que chaque $f_n$ soit bornée sur $U$. Pour $f_n(z)=z^n$ sur $U=\C$, $\norm{f_n}_{\infty,\C}=+\infty$ : il n'y a pas de convergence normale sur $\C$, d'où l'intérêt de la version **locale**.

### H2 — le sup est pris sur tout $U$

C'est $\norm{f_n}_{\infty,U}$ (un nombre par $n$) qui doit être sommable, pas $|f_n(z)|$ pour chaque $z$ séparément : ce dernier cas est la convergence absolue ponctuelle, beaucoup plus faible.

## Exemples

* **Série géométrique.** $\sum_{n\ge0}z^n$ sur $D(0,1)$. Sur $\bar D(0,r)$, $r<1$ : $\norm{z^n}_{\infty,\bar D(0,r)}=r^n$, sommable ; donc convergence **localement normale** sur $D(0,1)$. Mais $\norm{z^n}_{\infty,D(0,1)}=1$ : pas de convergence normale sur $D(0,1)$. Pas même de convergence uniforme sur $D(0,1)$ : les sommes partielles sont des polynômes, bornés sur $D(0,1)$, et une limite uniforme de fonctions bornées est bornée, alors que $\frac1{1-z}$ ne l'est pas sur $D(0,1)$.
* **Uniforme sans être normale.** Les fonctions constantes $f_n(z)=\frac{(-1)^n}{n+1}$ sur $U=\C$ : la série converge uniformément sur $\C$ (ses sommes partielles sont des constantes qui convergent vers $\ln2$), mais $\norm{f_n}_{\infty,\C}=\frac1{n+1}$ n'est pas sommable : pas de convergence normale. Variante non constante : $\sum_{n\ge1}(-1)^nx^n/n$ sur $[0,1]$, où le critère des séries alternées donne $|R_N(x)|\le x^{N+1}/(N+1)\le1/(N+1)$ (uniforme), alors que $\sup_{[0,1]}x^n/n=1/n$.
* **Fonction zêta.** $\sum_{n\ge1}n^{-s}$ avec $n^{-s}=e^{-s\ln n}$ : $|n^{-s}|=n^{-\Re(s)}$. Sur le demi-plan $\{\Re(s)>\sigma_0\}$ avec $\sigma_0>1$, $\norm{n^{-s}}_\infty\le n^{-\sigma_0}$, sommable : convergence normale sur ce demi-plan, donc localement normale sur $\{\Re(s)>1\}$.

## Pièges

* > ⚠️ Normale $\Rightarrow$ uniforme, mais **pas** l'inverse (exemple des séries alternées).
* La convergence normale dépend de l'ensemble $U$ : $\sum z^n$ converge normalement sur chaque $\bar D(0,r)$, $r<1$, mais pas sur $D(0,1)$. Dans les théorèmes du chapitre, on demande toujours la version **locale**.
* Ne pas confondre avec la convergence absolue en chaque point : $\sum|f_n(z)|<+\infty$ pour tout $z$ n'entraîne pas la convergence uniforme.
