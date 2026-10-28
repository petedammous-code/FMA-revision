---
id: ch01-liouville
type: theorem
chapter: 1
title: Théorème de Liouville
ref: Théorème I.10.1
page: 26
importance: 3
depends: [ch01-estimees-cauchy]
tags: [liouville, bornee, entiere, cauchy, estimees]
---
## Intuition

> 💡 Une fonction holomorphe sur tout $\C$ (on dit **entière**) qui reste bornée ne peut pas non plus osciller : elle est constante. En variable réelle, $\sin$ est bornée et non constante sur $\R$ ; en variable complexe c'est impossible, et d'ailleurs $\sin(iy)=i\sinh y$ explose quand $y\to\pm\infty$.

La raison : la formule de Cauchy exprime $f^{(k)}(0)/k!$ comme une moyenne de $f$ sur le cercle $C(0,R)$ divisée par $R^k$ (estimées de Cauchy, [[ch01-estimees-cauchy]]). Si $f$ est bornée par $M$, cette quantité est $\le M/R^k$ ; en faisant grandir le cercle ($R\to+\infty$), toutes les dérivées d'ordre $k\ge1$ en $0$ s'annulent, et la série de Taylor se réduit à son terme constant.

Rappel : $\Hol(\C)$ est l'ensemble des fonctions holomorphes sur $\C$ ([[ch01-def-holomorphe]]) ; « bornée sur $\C$ » signifie $\sup_{z\in\C}|f(z)|<+\infty$.

## Énoncé

**Théorème (poly, Théorème I.10.1 — Théorème de Liouville (Cauchy, 1844), p. 26).** Soit $f\in\Hol(\C)$ une fonction bornée sur $\C$. Alors, $f$ est constante.

(Le poly laisse la preuve au lecteur : ce sont les questions 1 et 2 de l'Exercice I.10.3 — montrer que $f^{(k)}(0)=0$ pour tout $k\ge1$, puis en déduire que $f$ est constante.)

## Hypothèses

### H1 — $f$ est holomorphe sur $\C$ tout entier

**Rôle.** On applique les estimées de Cauchy sur le cercle $C(0,R)$ pour **tout** $R>0$, ce qui exige $\bar D(0,R)\subset\Omega$ pour tout $R$, donc $\Omega=\C$. C'est aussi ce qui donne un rayon de convergence infini à la série de Taylor en $0$.

**Si on la retire.** $f(z)=z$ est holomorphe sur $D(0,1)$, bornée par $1$, non constante. De même $f(z)=\frac1z$ est holomorphe sur $\{|z|>1\}$ et bornée par $1$, non constante. Être borné sur un ouvert strict de $\C$ ne force rien.

### H2 — $f$ est bornée sur $\C$

**Rôle.** C'est elle qui donne $\sup_{C(0,R)}|f|\le M$ **indépendamment de $R$**, d'où $|f^{(k)}(0)|\le k!M/R^k\to0$ pour $k\ge1$.

**Si on la retire.** $f(z)=z$ et $f(z)=e^z$ sont entières et non constantes. Noter que $|e^z|=e^{\Re z}\le e^a$ sur le demi-plan $\{\Re z\le a\}$ : $e^z$ est bornée sur tout demi-plan gauche, mais pas sur $\C$ ($e^x\to+\infty$ quand $x\to+\infty$).

## Idée de la preuve

Estimées de Cauchy sur $C(0,R)$ : $|f^{(k)}(0)|\le k!\,M\,R^{-k}$. On fait $R\to+\infty$ : $f^{(k)}(0)=0$ pour $k\ge1$. Comme $f$ est somme de sa série de Taylor en $0$ sur $D(0,\rho(0))=\C$, $f\equiv f(0)$.

## Preuve

Soit $M=\sup_{\C}|f|<+\infty$. Puisque $f$ est holomorphe sur $\C$, on a $\bar D(0,R)\subset\C$ pour tout $R>0$, donc $\rho(0)=\sup\{r>0:\bar D(0,r)\subset\C\}=+\infty$ dans les estimées de Cauchy ([[ch01-estimees-cauchy]]).

**Question 1 : $f^{(k)}(0)=0$ pour $k\ge1$.** Pour tout $R>0$ et tout $k\ge0$, les estimées de Cauchy donnent
$$
\frac{|f^{(k)}(0)|}{k!}\le\frac{\sup_{C(0,R)}|f|}{R^k}\le\frac{M}{R^k}.
$$
Pour $k\ge1$, le membre de droite tend vers $0$ lorsque $R\to+\infty$, tandis que le membre de gauche ne dépend pas de $R$ : donc $f^{(k)}(0)=0$.

**Question 2 : $f$ est constante.** Toujours d'après les estimées de Cauchy, $f$ est égale à la somme de sa série de Taylor en $0$ sur $D(0,\rho(0))=\C$ :
$$
f(z)=\sum_{k\ge0}\frac{f^{(k)}(0)}{k!}z^k\qquad(z\in\C).
$$
Tous les coefficients d'indice $k\ge1$ sont nuls, donc $f(z)=f(0)$ pour tout $z\in\C$. $\square$

*Variante :* on peut n'utiliser que $k=1$, en un point $z_0$ quelconque : les estimées de Cauchy sur $C(z_0,R)$ donnent $|f'(z_0)|\le M/R\to0$, donc $f'\equiv0$ sur $\C$, et $\C$ étant connexe, $f$ est constante.

## Preuve à trous

Soit $M=\sup_\C|f|$. Pour $R>0$ et $k\ge0$, les <trou indice="quel résultat majore les dérivées en un point par le sup sur un cercle ?">estimées de Cauchy sur $C(0,R)$, licites pour tout $R$ car $f$ est holomorphe sur $\C$</trou> donnent
$$
|f^{(k)}(0)|\le\frac{k!}{R^k}\sup_{C(0,R)}|f|\le\frac{k!\,M}{R^k}.
$$
Pour $k\ge1$, on fait <trou>$R\to+\infty$ : le majorant tend vers $0$ alors que $|f^{(k)}(0)|$ n'en dépend pas, donc $f^{(k)}(0)=0$</trou>. Enfin $f$ est <trou indice="quel est le rayon de convergence de la série de Taylor en 0 ?">égale à sa série de Taylor en $0$ sur tout $\C$, puisque $\rho(0)=+\infty$</trou>, dont seul le terme constant subsiste : $f\equiv f(0)$. $\square$

## Exemples

* **D'Alembert–Gauss.** Si $P$ est un polynôme non constant sans racine, $1/P$ est entière et tend vers $0$ à l'infini, donc bornée, donc constante : absurde. Voir [[ch01-dalembert-gauss]].
* **Partie réelle bornée.** Si $f$ est entière et $\Re(f)\le A$ sur $\C$, alors $g=e^{f}$ est entière et $|g|=e^{\Re f}\le e^A$ : $g$ est constante par Liouville, donc $g'=f'e^f\equiv0$, et comme $e^f$ ne s'annule pas, $f'\equiv0$ : $f$ est constante.
* **Image dense, croissance polynomiale.** Une fonction entière non constante a une image dense dans $\C$, et une fonction entière majorée par $a+b|z|^m$ est un polynôme de degré $\le m$ : voir [[ch01-liouville-consequences-image-dense-croissance-polynomiale]].

## Pièges

* > ⚠️ « bornée » doit être vérifié sur **tout** $\C$, pas sur un disque ni sur un demi-plan.
* Ne pas confondre avec le principe du maximum ([[ch01-principe-maximum]]), qui concerne un ouvert (connexe) et le comportement de $|f|$, notamment son sup sur le bord.
* L'analogue réel est faux : $\sin$, $\cos$, $\arctan$, $x\mapsto\frac1{1+x^2}$ sont bornées sur $\R$ et $C^\infty$ (même analytiques) sans être constantes. Pour $\frac1{1+z^2}$, l'extension complexe a des pôles en $\pm i$ : elle n'est pas entière.
* $\sin$ et $\cos$ ne sont **pas** bornées sur $\C$ : $|\sin(iy)|=|\sinh y|\to+\infty$.
