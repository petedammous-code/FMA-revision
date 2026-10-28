---
id: ch03-famille-normale
type: definition
chapter: 3
title: Famille normale
ref: Définition III.3.3
page: 64
importance: 2
depends: [ch03-convergence-localement-uniforme]
tags: [montel, famille-normale, compacite, sous-suite, convergence-localement-uniforme]
---
## Intuition

> 💡 Une famille normale, c'est une famille de fonctions qui se comporte comme une partie **bornée de $\R^d$** vis-à-vis de Bolzano–Weierstrass : de toute suite on peut **extraire** une sous-suite convergente. Ici « convergente » veut dire : **localement uniformément** sur $\Omega$ ([[ch03-convergence-localement-uniforme]]), c'est-à-dire uniformément sur chaque compact de $\Omega$ ([[ch03-convergence-uniforme-compacts]]).

En langage topologique, c'est une partie **relativement compacte** (d'adhérence compacte) de $\Hol(\Omega)$ pour la convergence uniforme sur les compacts : la limite peut sortir de la famille, exactement comme une suite de $]0,1[$ peut converger vers $0\notin\,]0,1[$.

L'intérêt : dans un problème d'optimisation (maximiser $|f'(z_0)|$ sur une famille, comme dans la preuve de [[ch03-riemann-representation-conforme]]), on prend une suite maximisante et on en extrait une sous-suite convergente — si la famille est normale. Le [[ch03-montel|théorème de Montel]] dit que c'est le cas dès que la famille est localement uniformément bornée ([[ch03-famille-localement-uniformement-bornee]]).

## Énoncé

**Définition (poly, Définition III.3.3, p. 64).** Soit $\Omega$ un ouvert de $\C$. Une famille de fonctions $\mathcal F\subset\Hol(\Omega)$ est dite **normale** si toute suite d'éléments de $\mathcal F$ admet une sous-suite qui converge localement uniformément sur $\Omega$. On n'exige pas que la limite fasse partie de la famille $\mathcal F$.

En quantificateurs : pour toute suite $(f_n)_{n\in\N}$ d'éléments de $\mathcal F$, il existe $\varphi:\N\to\N$ strictement croissante et une fonction $f:\Omega\to\C$ telles que, pour tout compact $K\subset\Omega$, $\sup_{z\in K}|f_{\varphi(n)}(z)-f(z)|\to0$ quand $n\to\infty$.

## Hypothèses

### H1 — la limite est une fonction à valeurs dans $\C$ (finie)

**Rôle.** Avec la définition du poly, la sous-suite doit converger vers une vraie fonction $f:\Omega\to\C$ ; par le théorème de Weierstraß ([[ch03-weierstrass]]), $f$ est alors automatiquement holomorphe.

**Si on l'oublie.** Certains livres (Rudin, Stein–Shakarchi pour Montel « généralisé ») admettent aussi la convergence vers $\infty$ ; ce n'est **pas** la convention du poly. Ainsi $\{z^n\}$ sur $\{|z|>1\}$ (qui tend vers $\infty$ localement uniformément) n'est **pas** normale au sens du poly.

### H2 — la limite n'est pas demandée dans $\mathcal F$

**Rôle.** C'est ce qui rend la notion vérifiable par Montel (compacité **relative**). Pour savoir si la limite reste dans la famille, il faut un argument supplémentaire (par exemple Hurwitz pour l'injectivité, [[ch03-hurwitz]]).

**Si on l'exigeait.** Peu de familles naturelles seraient « normales » : $\{z^n,\ n\ge1\}$ sur $D(0,1)$ a pour limite $0$, qui n'est pas dans la famille.

## Exemples

* **$\{z^n,\ n\ge1\}$ sur $D(0,1)$ est normale.** Toute suite $(z^{k_n})$ d'éléments de la famille : soit un exposant revient une infinité de fois (sous-suite constante, convergente), soit $k_{\varphi(n)}\to+\infty$ pour une extraction, et alors sur $\bar D(0,\rho)$, $\rho<1$, $\sup|z^{k_{\varphi(n)}}|=\rho^{k_{\varphi(n)}}\to0$ : convergence localement uniforme vers $0\notin\mathcal F$.
* **$\{z+n,\ n\in\N\}$ sur $\C$ n'est pas normale.** Pour toute extraction, $f_{\varphi(n)}(0)=\varphi(n)\to+\infty$ : aucune sous-suite ne converge, même simplement en $0$.
* **Dans la preuve de Riemann.** $\Sigma_{z_0}=\{f\in\Hol(\Omega)$ injective, $f(\Omega)\subset D(0,1)$, $f(z_0)=0\}$ est normale (bornée par $1$, Montel) mais **pas fermée** : si $\psi\in\Sigma_{z_0}$, alors $\psi/n\in\Sigma_{z_0}$ pour tout $n\ge1$ et $\psi/n\to0$ uniformément (car $|\psi|\le1$), limite non injective donc hors de $\Sigma_{z_0}$. C'est pourquoi la preuve du théorème doit montrer à part, grâce à Hurwitz et à $|h'(z_0)|=\eta>0$, que la limite extraite est encore injective.

## Pièges

* > ⚠️ Normale $\ne$ « toute suite converge » : on demande seulement l'existence d'une **sous-suite** convergente. $\{z^n\}\cup\{z^n/2\}$... plus simplement la suite alternée $f_{2n}=0$, $f_{2n+1}=1$ (fonctions constantes) forme une famille normale sans que la suite converge.
* La convergence demandée est **localement uniforme**, pas uniforme sur $\Omega$ : $\{z^n\}$ ne converge pas uniformément sur $D(0,1)$ (car $\sup_{D(0,1)}|z^n|=1$), et pourtant la famille est normale.
* La convention du poly exclut la limite $\infty$ (voir H1).
* Pour montrer qu'une famille est normale, on n'utilise presque jamais la définition : on vérifie qu'elle est localement uniformément bornée et on applique [[ch03-montel]].
